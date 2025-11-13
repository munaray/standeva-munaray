"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Clock,
	Calendar,
	ArrowLeft,
	Share2,
	Bookmark,
	MessageCircle,
	Send,
	Reply,
	MoreVertical,
	Flag,
	Heart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type BlogPost as BlogPostType } from "@/lib/blog-server";
import MarkdownRenderer from "@/components/ui/markdown-renderer";

// Types
interface Comment {
	id: string;
	author: {
		name: string;
		avatar: string;
		bio?: string;
	};
	content: string;
	createdAt: string;
	likes: number;
	isLiked: boolean;
	replies: Comment[];
	level?: number;
}

interface BlogArticleProps {
	initialPost?: BlogPostType | null;
}

const BlogArticle: React.FC<BlogArticleProps> = ({ initialPost }) => {
	const post = initialPost ?? null;
	const [comments, setComments] = useState<Comment[]>([]);
	const [newComment, setNewComment] = useState("");
	const [replyingTo, setReplyingTo] = useState<string | null>(null);
	const [replyContent, setReplyContent] = useState("");
	const [isBookmarked, setIsBookmarked] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
	const [showShareMenu, setShowShareMenu] = useState(false);

	// Mock comments data
	useEffect(() => {
		setComments([
			{
				id: "1",
				author: {
					name: "Michael Rodriguez",
					avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
					bio: "Financial Advisor at TechWealth Management",
				},
				content:
					"This is an excellent analysis of how AI is transforming financial planning. I've been implementing some of these strategies in my practice, and results have been remarkable.",
				createdAt: "2 hours ago",
				likes: 24,
				isLiked: false,
				replies: [
					{
						id: "1-1",
						author: {
							name: "Sarah Chen",
							avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&auto=format&fit=crop",
							bio: "Author",
						},
						content:
							"Thank you for sharing your experience, Michael! It's great to hear real-world validation of these concepts.",
						createdAt: "1 hour ago",
						likes: 12,
						isLiked: true,
						replies: [],
						level: 1,
					},
				],
				level: 0,
			},
		]);
	}, []);

	const handleComment = () => {
		if (!newComment.trim()) return;

		const comment: Comment = {
			id: Date.now().toString(),
			author: {
				name: "John Doe",
				avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
				bio: "Financial Planning Enthusiast",
			},
			content: newComment,
			createdAt: "Just now",
			likes: 0,
			isLiked: false,
			replies: [],
			level: 0,
		};

		setComments([comment, ...comments]);
		setNewComment("");
	};

	const handleReply = (parentId: string) => {
		if (!replyContent.trim()) return;

		const reply: Comment = {
			id: `${parentId}-${Date.now()}`,
			author: {
				name: "John Doe",
				avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
				bio: "Financial Planning Enthusiast",
			},
			content: replyContent,
			createdAt: "Just now",
			likes: 0,
			isLiked: false,
			replies: [],
			level: 1,
		};

		setComments(
			comments.map((comment) => {
				if (comment.id === parentId) {
					return { ...comment, replies: [...comment.replies, reply] };
				}
				return comment;
			})
		);

		setReplyContent("");
		setReplyingTo(null);
	};

	const handleLike = (commentId: string) => {
		const updateCommentLikes = (comments: Comment[]): Comment[] => {
			return comments.map((comment) => {
				if (comment.id === commentId) {
					return {
						...comment,
						likes: comment.isLiked
							? comment.likes - 1
							: comment.likes + 1,
						isLiked: !comment.isLiked,
					};
				}
				if (comment.replies.length > 0) {
					return {
						...comment,
						replies: updateCommentLikes(comment.replies),
					};
				}
				return comment;
			});
		};

		setComments(updateCommentLikes(comments));
	};

	const renderComment = (comment: Comment) => (
		<motion.div
			key={comment.id}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			className={`${comment.level === 1 ? "ml-8 mt-4" : "mb-6"}`}>
			<div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
				<div className="flex items-start justify-between mb-4">
					<div className="flex items-center gap-3">
						<Image
							src={comment.author.avatar}
							alt={comment.author.name}
							width={40}
							height={40}
							className="rounded-full"
						/>
						<div>
							<div className="flex items-center gap-2">
								<h4 className="font-semibold text-white">
									{comment.author.name}
								</h4>
								{comment.author.bio && (
									<span className="text-xs text-slate-400">
										• {comment.author.bio}
									</span>
								)}
							</div>
							<p className="text-xs text-slate-400">
								{comment.createdAt}
							</p>
						</div>
					</div>
					<button className="text-slate-400 hover:text-white transition-colors">
						<MoreVertical size={16} />
					</button>
				</div>

				<p className="text-slate-300 leading-relaxed mb-4">
					{comment.content}
				</p>

				<div className="flex items-center gap-4">
					<motion.button
						onClick={() => handleLike(comment.id)}
						className={`flex items-center gap-2 text-sm transition-colors ${
							comment.isLiked
								? "text-red-400"
								: "text-slate-400 hover:text-white"
						}`}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						<Heart
							size={16}
							className={comment.isLiked ? "fill-current" : ""}
						/>
						{comment.likes}
					</motion.button>

					<motion.button
						onClick={() => setReplyingTo(comment.id)}
						className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						<Reply size={16} />
						Reply
					</motion.button>

					<button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
						<Flag size={16} />
						Report
					</button>
				</div>

				{replyingTo === comment.id && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						className="mt-4">
						<div className="flex gap-3">
							<Image
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
								alt="You"
								width={32}
								height={32}
								className="rounded-full"
							/>
							<div className="flex-1">
								<textarea
									value={replyContent}
									onChange={(e) =>
										setReplyContent(e.target.value)
									}
									placeholder="Write a reply..."
									className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 resize-none"
									rows={3}
								/>
								<div className="flex justify-end gap-2 mt-2">
									<button
										onClick={() => setReplyingTo(null)}
										className="px-4 py-2 text-slate-400 hover:text-white transition-colors">
										Cancel
									</button>
									<motion.button
										onClick={() => handleReply(comment.id)}
										className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}>
										<Send size={16} />
										Reply
									</motion.button>
								</div>
							</div>
						</div>
					</motion.div>
				)}

				{comment.replies.map(renderComment)}
			</div>
		</motion.div>
	);

	if (!post) {
		return (
			<div className="min-h-screen bg-black text-white flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-2xl font-bold mb-4">
						Article not found
					</h1>
					<Link
						href="/blog"
						className="text-blue-400 hover:text-blue-300">
						← Back to Blog
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-black text-white">
			{/* Background Pattern */}
			<div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAzMCAwIEwgMCA2MCAwIDYwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

			{/* Article Header */}
			<motion.header
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-slate-800">
				<div className="container mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						<Link
							href="/blog"
							className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
							<ArrowLeft size={20} />
							<span>Back to Blog</span>
						</Link>

						<div className="flex items-center gap-4">
							<motion.button
								onClick={() => setIsLiked(!isLiked)}
								className={`p-2 rounded-lg transition-colors ${
									isLiked
										? "text-red-400 bg-red-400/10"
										: "text-slate-400 hover:text-white hover:bg-slate-800"
								}`}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}>
								<Heart
									size={20}
									className={isLiked ? "fill-current" : ""}
								/>
							</motion.button>

							<motion.button
								onClick={() => setIsBookmarked(!isBookmarked)}
								className={`p-2 rounded-lg transition-colors ${
									isBookmarked
										? "text-blue-400 bg-blue-400/10"
										: "text-slate-400 hover:text-white hover:bg-slate-800"
								}`}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}>
								<Bookmark
									size={20}
									className={
										isBookmarked ? "fill-current" : ""
									}
								/>
							</motion.button>

							<div className="relative">
								<motion.button
									onClick={() =>
										setShowShareMenu(!showShareMenu)
									}
									className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}>
									<Share2 size={20} />
								</motion.button>

								<AnimatePresence>
									{showShareMenu && (
										<motion.div
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: 10 }}
											className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-700 rounded-lg shadow-xl">
											<button className="w-full px-4 py-3 text-left hover:bg-slate-800 transition-colors flex items-center gap-3">
												<span className="w-4 h-4 bg-blue-400 rounded-full" />
												<span>Share on Twitter</span>
											</button>
											<button className="w-full px-4 py-3 text-left hover:bg-slate-800 transition-colors flex items-center gap-3">
												<span className="w-4 h-4 bg-blue-400 rounded-full" />
												<span>Share on LinkedIn</span>
											</button>
											<button className="w-full px-4 py-3 text-left hover:bg-slate-800 transition-colors flex items-center gap-3">
												<span className="w-4 h-4 bg-blue-400 rounded-full" />
												<span>Copy Link</span>
											</button>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</div>
					</div>
				</div>
			</motion.header>

			{/* Article Content */}
			<article className="relative z-10">
				{/* Hero Image */}
				{post.image && (
					<div className="relative h-[60vh] overflow-hidden">
						<Image
							src={post.image}
							alt={post.title}
							fill
							className="object-cover"
							priority
						/>
						<div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

						<div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 py-12">
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}>
								<div className="flex flex-wrap gap-2 mb-6">
									{post.keywords.map((keyword, index) => (
										<span
											key={index}
											className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-400 font-medium">
											{keyword}
										</span>
									))}
								</div>

								<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
									{post.title}
								</h1>

								<div className="flex flex-wrap items-center gap-6 text-slate-300">
									<div className="flex items-center gap-3">
										<Image
											src={post.author.avatar}
											alt={post.author.name}
											width={48}
											height={48}
											className="rounded-full"
										/>
										<div>
											<p className="font-semibold">
												{post.author.name}
											</p>
											<p className="text-sm text-slate-400">
												{post.author.bio}
											</p>
										</div>
									</div>

									<div className="flex items-center gap-4 text-sm">
										<span className="flex items-center gap-1">
											<Calendar size={16} />
											{post.publishedAt}
										</span>
										<span className="flex items-center gap-1">
											<Clock size={16} />
											{post.readTime} min read
										</span>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				)}

				{/* Article Body */}
				<div className="container mx-auto px-6 py-16 max-w-4xl">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						<MarkdownRenderer content={post.content} />
					</motion.div>

					{/* Article Footer */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="mt-16 pt-8 border-t border-slate-800">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-4">
								<motion.button
									onClick={() => setIsLiked(!isLiked)}
									className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
										isLiked
											? "text-red-400 bg-red-400/10"
											: "text-slate-400 hover:text-white hover:bg-slate-800"
									}`}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}>
									<Heart
										size={20}
										className={
											isLiked ? "fill-current" : ""
										}
									/>
									Like
								</motion.button>

								<div className="flex items-center gap-2 text-slate-400">
									<MessageCircle size={20} />
									{comments.reduce(
										(acc, comment) =>
											acc + 1 + comment.replies.length,
										0
									)}{" "}
									Comments
								</div>
							</div>

							<div className="flex items-center gap-2">
								<span className="text-slate-400">
									Share this article:
								</span>
								{["Twitter", "LinkedIn"].map((platform) => (
									<motion.button
										key={platform}
										className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}>
										<span className="w-4 h-4 bg-blue-400 rounded-full" />
									</motion.button>
								))}
							</div>
						</div>
					</motion.div>
				</div>

				{/* Comments Section */}
				<div className="border-t border-slate-800">
					<div className="container mx-auto px-6 py-16 max-w-4xl">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}>
							<h2 className="text-3xl font-bold mb-8">
								Comments (
								{comments.reduce(
									(acc, comment) =>
										acc + 1 + comment.replies.length,
									0
								)}
								)
							</h2>

							{/* Comment Form */}
							<div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 mb-8">
								<h3 className="text-xl font-semibold mb-4">
									Leave a Comment
								</h3>
								<div className="flex gap-4">
									<Image
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
										alt="You"
										width={48}
										height={48}
										className="rounded-full"
									/>
									<div className="flex-1">
										<textarea
											value={newComment}
											onChange={(e) =>
												setNewComment(e.target.value)
											}
											placeholder="Share your thoughts..."
											className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 resize-none"
											rows={4}
										/>
										<div className="flex justify-end gap-2 mt-4">
											<button className="px-6 py-2 text-slate-400 hover:text-white transition-colors">
												Cancel
											</button>
											<motion.button
												onClick={handleComment}
												className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}>
												<Send size={16} />
												Post Comment
											</motion.button>
										</div>
									</div>
								</div>
							</div>

							{/* Comments List */}
							<div className="space-y-6">
								{comments.map(renderComment)}
							</div>
						</motion.div>
					</div>
				</div>
			</article>
		</div>
	);
};

export default BlogArticle;
