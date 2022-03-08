import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import { useSession } from "next-auth/react";
function Feed() {
  const { data: session } = useSession();
  return (
    <main
      className={`grid grid-cols-1 
    md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 
    xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}
    >
      {/* Section */}
      <section className="col-span-2">
        {/* Stories */}
        {/* Posts  */}
        <Posts />
      </section>

      {session && (
        <section>
          <div>
            <MiniProfile />
          </div>
        </section>
      )}
      {/* Section */}
    </main>
  );
}

export default Feed;
