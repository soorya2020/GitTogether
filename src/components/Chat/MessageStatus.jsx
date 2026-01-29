import { Check, CheckCheck } from "lucide-react";

const MessageStatus = ({ status }) => {
  // status can be: 'sent', 'delivered', or 'seen'

  return (
    <div className="flex items-center justify-end gap-1 ml-2">
      {status === "sent" && <Check className="w-3 h-3 text-base-content/50" />}

      {status === "delivered" && (
        <CheckCheck className="w-3 h-3 text-base-content/50" />
      )}

      {status === "seen" && <CheckCheck className="w-3 h-3 text-blue-400" />}
    </div>
  );
};
export default MessageStatus;
