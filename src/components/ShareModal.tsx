
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Share, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { generateGWAResultsText, getShareUrls } from "@/utils/pdfGenerator";

interface Subject {
  id: number;
  name: string;
  grade: string;
  units: string;
}

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  subjects: Subject[];
  gwa: number;
}

export const ShareModal = ({ isOpen, onClose, subjects, gwa }: ShareModalProps) => {
  const { toast } = useToast();
  
  const shareText = generateGWAResultsText(subjects, gwa);
  const shareUrls = getShareUrls(shareText);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      toast({
        title: "Copied!",
        description: "GWA results copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Unable to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleSocialShare = (platform: string, url: string) => {
    window.open(url, '_blank', 'width=600,height=400');
    toast({
      title: "Opening Share",
      description: `Opening ${platform} to share your GWA results`,
    });
  };

  const handleNativeShare = async () => {
    if (navigator.share && navigator.canShare) {
      try {
        const shareData = {
          title: "My GWA Results",
          text: shareText,
          url: "https://mygwacalculator.com"
        };
        
        if (navigator.canShare(shareData)) {
          await navigator.share(shareData);
          toast({
            title: "Shared Successfully!",
            description: "GWA results have been shared",
          });
          return;
        }
      } catch (err) {
        console.log("Native share failed:", err);
      }
    }
    
    // Fallback to copy
    handleCopyToClipboard();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Share className="h-5 w-5" />
            Share Your GWA Results
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg text-sm">
            <p className="font-semibold mb-2">Preview:</p>
            <div className="whitespace-pre-line text-gray-700">
              {shareText}
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-700">Share to:</p>
            
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSocialShare("WhatsApp", shareUrls.whatsapp)}
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4 text-green-600" />
                WhatsApp
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSocialShare("Facebook", shareUrls.facebook)}
                className="flex items-center gap-2"
              >
                <div className="h-4 w-4 bg-blue-600 rounded"></div>
                Facebook
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSocialShare("Twitter", shareUrls.twitter)}
                className="flex items-center gap-2"
              >
                <div className="h-4 w-4 bg-black rounded"></div>
                Twitter
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSocialShare("Telegram", shareUrls.telegram)}
                className="flex items-center gap-2"
              >
                <div className="h-4 w-4 bg-blue-500 rounded"></div>
                Telegram
              </Button>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={handleCopyToClipboard}
                className="flex-1 flex items-center gap-2"
              >
                <Copy className="h-4 w-4" />
                Copy Text
              </Button>
              
              <Button
                onClick={handleNativeShare}
                className="flex-1 flex items-center gap-2"
              >
                <Share className="h-4 w-4" />
                More Options
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
