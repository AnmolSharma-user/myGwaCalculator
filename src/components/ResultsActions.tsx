
import { Button } from "@/components/ui/button";
import { Copy, Share, Printer } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ShareModal } from "@/components/ShareModal";
import { useState } from "react";

interface ResultsActionsProps {
  onCopy: () => void;
  onPrint: () => void;
  shareData?: {
    subjects: Array<{ id: number; name: string; grade: string; units: string }>;
    gwa: number;
  };
  customShareText?: string;
}

export const ResultsActions = ({ onCopy, onPrint, shareData, customShareText }: ResultsActionsProps) => {
  const { toast } = useToast();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleCopy = async () => {
    try {
      await onCopy();
      toast({
        title: "Copied!",
        description: "Results copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Unable to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleShare = () => {
    setIsShareModalOpen(true);
  };

  const handlePrint = () => {
    onPrint();
    toast({
      title: "Printing...",
      description: "Opening print dialog",
    });
  };

  // Convert custom share text to ShareModal format when no shareData is provided
  const getShareModalData = () => {
    if (shareData) {
      return shareData;
    }
    
    // Create mock data for ShareModal when using customShareText
    return {
      subjects: [{ id: 1, name: "Result", grade: customShareText || "", units: "1" }],
      gwa: 0
    };
  };

  return (
    <>
      <div className="flex gap-2 mt-4">
        <Button variant="outline" size="sm" onClick={handleCopy} className="flex items-center gap-2">
          <Copy className="h-4 w-4" />
          Copy
        </Button>
        <Button variant="outline" size="sm" onClick={handleShare} className="flex items-center gap-2">
          <Share className="h-4 w-4" />
          Share
        </Button>
        <Button variant="outline" size="sm" onClick={handlePrint} className="flex items-center gap-2">
          <Printer className="h-4 w-4" />
          Print
        </Button>
      </div>
      
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        subjects={getShareModalData().subjects}
        gwa={getShareModalData().gwa}
      />
    </>
  );
};
