import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// import { DeleteTutorButton } from "./DeleteTutorButton";
import Image from "next/image";
import { getAllBlogs } from "@/app/actions/(Admin)/blogs_function";
import { BlogDialog } from "./BlogDialog";
import { formatDate } from "@/utils/formatDateFunction";
import { DeleteBlog } from "./DeleteBlog";

export async function BlogTable() {
  const res = await getAllBlogs();

  if (!res.success) {
    return (
      <div>
        <p>{res.message}</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white p-3 rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            {/* <TableHead className="text-center">Image</TableHead> */}
            <TableHead>title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>postedDate</TableHead>
            {/* <TableHead>Specialist</TableHead> */}
            {/* <TableHead>Location</TableHead> */}
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {res.blogs.length > 0 ? (
            res.blogs.map((blog) => (
              <TableRow key={blog._id}>
                {/* <TableCell className=" ">
                  <div className="relative w-10 h-10">
                    <Image
                      src={`data:${blog.photo.mimetype};base64,${blog.photo.data}`}
                      alt={blog.title}
                      fill
                      className="rounded-full"
                    />
                  </div>
                </TableCell> */}
                <TableCell>{blog.title}</TableCell>
                <TableCell>
                  <div className="line-clamp-3">{blog.description}</div>
                </TableCell>
                <TableCell>{formatDate(blog.postedDate)}</TableCell>
                {/* <TableCell>{blog.specialist}</TableCell> */}
                {/* <TableCell>{blog.location}</TableCell> */}
                <TableCell className="flex gap-2">
                  <BlogDialog type="edit" editID={blog._id} />
                  <DeleteBlog blogId={blog._id} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-gray-500 py-4">
                No blog available. Add a new tutor to get started.
                <BlogDialog type="add" />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
