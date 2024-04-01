"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function ToastWithTitle({
  date,
  stadium,
  isDisabled,
}: {
  date: string;
  stadium: string;
  isDisabled: boolean;
}) {
  const { toast } = useToast();
  return (
    <Button
      disabled={isDisabled}
      className="bg-button py-[10px] text-white rounded-lg w-full hover:bg-button"
      onClick={() => {
        toast({
          title: `تم الحجز في ملعب ${stadium}`,
          description: `بتاريخ : ${date}`,
        });
      }}
    >
      حجز مباراة
    </Button>
  );
}
