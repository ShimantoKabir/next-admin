import React, { useState, useEffect } from "react";
import "@/app/(main)/components/otp/otp-timer/otp-timer.scss";
import { Tooltip } from "primereact/tooltip";

const OtpTimer: React.FC<{ onResendOtp: () => void; email: string }> = ({
  onResendOtp,
  email,
}) => {
  const optExpiration: number = 10; // 3 minutes
  const [timeLeft, setTimeLeft] = useState<number>(optExpiration);
  const [timerOn, setTimerOn] = useState<boolean>(true);

  useEffect(() => {
    if (!timerOn) return;

    if (timeLeft >= 0) {
      const timerId = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    } else {
      setTimerOn(false);
    }
  }, [timeLeft, timerOn]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
  };

  const onResendClick = () => {
    setTimerOn(true);
    setTimeLeft(optExpiration);
    onResendOtp();
  };

  return (
    <p className="m-0 otp-timer">
      <Tooltip target=".resend-otp" />
      <span className={timerOn ? "clock" : "hide"}>{formatTime(timeLeft)}</span>
      <i
        onClick={() => onResendClick()}
        data-pr-tooltip="Resend OTP"
        data-pr-position="left"
        className={timerOn ? "hide resend-otp" : "pi pi-refresh resend-otp"}
      ></i>
    </p>
  );
};

export default OtpTimer;
