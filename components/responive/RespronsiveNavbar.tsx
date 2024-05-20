import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Menu } from "lucide-react";
import Link from "next/link";

const links = [
  {
    id: 3,
    name: "About Us",
    path: "/about",
  },
  {
    id: 5,
    name: "Prime",
    path: "/prime",
  },
  {
    id: 6,
    name: "Get Started Today",
    path: "/get-started",
  },
  {
    id: 7,
    name: "Log In Account",
    path: "/login",
  },
];

const RespronsiveNavbar = () => {
  return (
    <div className="lg:hidden">
      <Dialog>
        <DialogTrigger>
          <Menu />
        </DialogTrigger>
        <DialogContent className="w-[90%] mx-auto">
          {/* links */}
          <div className="space-y-4">
            {links.map((link) => (
              <Link href={link.path} key={link.id} className="block text-xl">
                {link.name}
              </Link>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RespronsiveNavbar;
