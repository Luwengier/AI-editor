import { Editor, ActiveTool, fonts } from '@/features/editor/types';
import { ToolSidebarClose } from '@/features/editor/components/tool-sidebar-close';
import { ToolSidebarHeader } from '@/features/editor/components/tool-sidebar-header';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface FontSidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const FontSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: FontSidebarProps) => {
  const onClose = () => {
    onChangeActiveTool('select');
  };
  const value = editor?.getActiveFontFamily();

  return (
    <aside
      className={cn(
        'bg-white relative border-r z-[40] w-[360px] h-full flex flex-col',
        activeTool === 'font' ? 'visible' : 'hidden'
      )}
    >
      <ToolSidebarHeader title="Font" description="Change the text font" />
      <ScrollArea>
        <div className="p-4 space-y-2 border-b">
          {fonts.map((font) => (
            <Button
              key={font}
              variant="secondary"
              size="lg"
              className={cn(
                'w-full h-16 justify-start text-left text-base px-4 py-2',
                value === font && 'border-2 border-blue-500'
              )}
              style={{
                fontFamily: font,
              }}
              onClick={() => editor?.changeFontFamily(font)}
            >
              {font}
            </Button>
          ))}
        </div>
      </ScrollArea>
      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};
