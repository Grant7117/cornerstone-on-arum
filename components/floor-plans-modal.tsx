"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { FloorPlansSection } from "./floor-plans-section"
import { ScrollArea } from "@/components/ui/scroll-area"

interface FloorPlansModalProps {
  isOpen: boolean
  onClose: () => void
  onEnquire: () => void
}

export function FloorPlansModal({ isOpen, onClose, onEnquire }: FloorPlansModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-[95vw] h-[90vh] p-0 overflow-hidden bg-background">
        <DialogHeader className="p-6 border-b">
          <DialogTitle className="text-2xl font-bold">Floor Plans</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-full">
          <div className="pb-20">
            <FloorPlansSection onEnquire={() => {
              onClose();
              onEnquire();
            }} />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
