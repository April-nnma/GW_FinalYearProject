import { useAuth } from "hooks";

export const CreateStory = (props) => {
  const { story } = props;
  const { user } = useAuth();

  return (
    <div
      className="w-28 h-48 relative rounded-xl p-3 to-pink-500 shadow cursor-pointer"
      style={{ backgroundImage: `url(${story.image})` }}
    >
      <div className="absolute">
        <img
          src={user.email}
          className="w-10 h-10 rounded-full border-4 border-white"
          alt="#"
        />
      </div>
      <div className="absolute text-center" style={{ bottom: "5%" }}>
        <p className="text-white font-semibold">{user?.email}</p>
      </div>
    </div>
  );
};
