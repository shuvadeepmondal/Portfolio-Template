"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/lib/blog-data"
import Link from "next/link"
import { Calendar, TrendingUp } from "lucide-react"

export function BlogSidebar() {
  const recentPosts = blogPosts.slice(0, 5)
  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  return (
    <div className="space-y-8">
      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Recent Posts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="group">
              <Link href={`/blog/${post.slug}`} className="block hover:text-primary transition-colors">
                <h4 className="font-medium text-sm leading-tight mb-2 group-hover:text-primary">{post.title}</h4>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </div>
              </Link>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category) => {
              const count = blogPosts.filter((post) => post.category === category).length
              return (
                <div key={category} className="flex items-center justify-between">
                  <span className="text-sm hover:text-primary transition-colors cursor-pointer">{category}</span>
                  <Badge variant="secondary" className="text-xs">
                    {count}
                  </Badge>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Tags */}
      <Card>
        <CardHeader>
          <CardTitle>Popular Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {allTags.slice(0, 15).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
