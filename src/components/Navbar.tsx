import Link from "next/link";
import { readUserSession, handleLogout } from "@/lib/actions";
import { Button } from "./ui/button";

async function Navbar() {
  const { data } = await readUserSession();

  return (
    <nav className="bg-gray-800 fixed w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-white font-bold text-xl">
              Supabase
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {data.session ? (
                <>
                  <Link
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    href="/todo"
                  >
                    CRUD
                  </Link>
                  <form action={handleLogout}>
                    <Button className="bg-red-500 hover:bg-red-600 hover:scale-105">
                      Logout
                    </Button>
                  </form>
                </>
              ) : (
                <Link
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/auth"
                >
                  Auth
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
