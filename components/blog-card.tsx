"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
  index?: number
}

export function BlogCard({ post, featured = false, index = 0 }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  if (featured) {
    return (
      <Card
        className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-auto overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-primary text-primary-foreground">Featured</Badge>
            </div>
          </div>

          <CardContent className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>

            <Badge variant="secondary" className="w-fit mb-4">
              {post.category}
            </Badge>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
              {post.title}
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Read More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </CardContent>
        </div>
      </Card>
    )
  }

  return (
    <Card
      className="group overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
        <div className="relative h-48 sm:h-auto overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
          />
        </div>

        <CardContent className="sm:col-span-2 p-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>

          <Badge variant="secondary" className="mb-3">
            {post.category}
          </Badge>

          <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {post.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              Read More
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
