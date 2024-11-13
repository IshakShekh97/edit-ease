"use client";

import * as React from "react";
import { Lightbulb, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";

import { Button, ButtonProps } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export function ThemeToggle({
  className,
  variant,
  btnClassName,
}: {
  className?: string;
  variant?: ButtonProps["variant"];
  btnClassName?: string;
}) {
  const { setTheme } = useTheme();

  return (
    <div className={className}>
      <Button
        size={"icon"}
        onClick={() => setTheme("dark")}
        variant={variant}
        className={cn("dark:hidden ", btnClassName)}
      >
        <Lightbulb className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <Button
        variant={variant}
        onClick={() => setTheme("light")}
        className={cn("hidden dark:flex", btnClassName)}
        size={"icon"}
      >
        <Sparkles className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </div>
  );
}
