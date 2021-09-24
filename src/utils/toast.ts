type GenerateToast = (payload: {
    message: string;
    action?: (payload: unknown) => unknown;
    duration?: number; // in milliseconds
    type?: "success" | "warning" | "danger" | "primary" | "secondary" | "info";
    position?:
        | "top center"
        | "top right"
        | "top left"
        | "bottom center"
        | "bottom right"
        | "bottom left";
}) => void;

export const generateToast: GenerateToast = ({
    message = "",
    action = () => null,
    duration = 10000,
    type = "info",
    position = "top center",
}) => {
    console.log({
        message,
        action,
        duration,
        type,
        position,
    });
};
