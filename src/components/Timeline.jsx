import { useContext } from "react";
import { TimeLineContext } from "../context/Context";
import {
  FiPhoneCall,
  FiVideo,
  FiMessageCircle
} from "react-icons/fi";

const Timeline = () => {
  const { timelineData } = useContext(TimeLineContext);

  const getIcon = (action) =>
    action === "call" ? (
      <FiPhoneCall className="text-green-500" />
    ) : action === "video-call" ? (
      <FiVideo className="text-blue-500" />
    ) : action === "text" ? (
      <FiMessageCircle className="text-yellow-500" />
    ) : (
      <FiMessageCircle />
    );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Timeline</h2>

      {timelineData.length === 0 ? (
        <p className="text-gray-500">No activity yet</p>
      ) : (
        <div className="space-y-4">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white shadow-sm p-4 rounded-lg"
            >
              <div className="text-xl mt-1">
                {getIcon(item.action)}
              </div>

              <div>
                <p className="font-semibold">
                  {item.action === "call"
                    ? "Call with "
                    : item.action === "video-call"
                    ? "Video call with "
                    : item.action === "text"
                    ? "Text with "
                    : ""}
                  {item.name}
                </p>

                <p className="text-sm text-gray-500">
                  {new Date(item.time).toDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;