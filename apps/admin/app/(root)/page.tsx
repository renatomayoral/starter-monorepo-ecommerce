import { UserButton } from "@clerk/nextjs";

const setupPage = () => {
  return (
    <div className="p-2">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default setupPage;
