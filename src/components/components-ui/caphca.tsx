import {
    useEffect,
    useRef,
    useState,
    useCallback,
    useImperativeHandle,
    forwardRef,
} from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const generateCaptchaText = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
};

export type CaptchaRef = {
    resetCaptcha: () => void;
};

const Captcha = forwardRef(function Captcha(
    { onValidate }: { onValidate: (isValid: boolean) => void },
    ref: React.Ref<CaptchaRef>
) {
    const [captchaText, setCaptchaText] = useState(generateCaptchaText());
    const [userInput, setUserInput] = useState("");
    const canvasRef = useRef < HTMLCanvasElement > (null);

    const drawCaptcha = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Background
        ctx.fillStyle = "#f3f3f3";
        ctx.fillRect(0, 0, 150, 50);

        // Noise
        for (let i = 0; i < 30; i++) {
            ctx.fillStyle = "#ccc";
            ctx.fillRect(Math.random() * 150, Math.random() * 50, 2, 2);
        }

        // Text
        ctx.font = "24px Arial";
        ctx.fillStyle = "#333";
        ctx.fillText(captchaText, 20, 35);
    }, [captchaText]);

    useEffect(() => {
        drawCaptcha();
    }, [drawCaptcha]);

    const refreshCaptcha = () => {
        const newCaptcha = generateCaptchaText();
        setCaptchaText(newCaptcha);
        setUserInput("");
        onValidate(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUserInput(value);
        onValidate(value.toUpperCase() === captchaText);
    };

    useImperativeHandle(ref, () => ({
        resetCaptcha: refreshCaptcha,
    }));

    return (
        <div className="space-y-2">
            <canvas ref={canvasRef} width={150} height={50} className="border rounded" />
            <div className="flex items-center space-x-2">
                <Input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="Masukkan CAPTCHA"
                />
                <Button type="button" onClick={refreshCaptcha}>
                    🔄
                </Button>
            </div>
        </div>
    );
});

export default Captcha;
