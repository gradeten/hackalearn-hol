using System;
using System.Collections.Generic;

namespace api.Models
{
    public class PostCollection
    {
        public virtual List<Post> Posts { get; set; } = new List<Post>();
    }

    public class Post
    {
        public virtual int Id { get; set; }

        public virtual string Title { get; set; }
        public virtual string Url { get; set; }
        public virtual DateTimeOffset Date { get; set; }
        public virtual Author Author { get; set; }
    }

    public class Author
    {
        public virtual string Name { get; set; }
    }
}