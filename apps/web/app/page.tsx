import { client } from "@repo/db/client";
export default async function Home() {
  const users = await client.users.findMany();
  console.log(users);

  return (
    <div>
      {"hi"}
      {users.length > 0 ? (
        users.map((user) => <div key={user.id}>{user.username}</div>)
      ) : (
        "No users found"
      )}
    </div>
  );
}
