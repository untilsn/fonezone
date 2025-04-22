import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaListUl,
  FaListOl,
  FaLink,
  FaImage,
  FaCode,
  FaUndo,
  FaRedo,
} from "react-icons/fa";

export const editorActions = [
  {
    name: "bold",
    icon: FaBold,
    command: (editor) => editor.chain().focus().toggleBold().run(),
    isActive: (editor) => editor.isActive("bold"),
  },
  {
    name: "italic",
    icon: FaItalic,
    command: (editor) => editor.chain().focus().toggleItalic().run(),
    isActive: (editor) => editor.isActive("italic"),
  },
  {
    name: "underline",
    icon: FaUnderline,
    command: (editor) => editor.chain().focus().toggleUnderline().run(),
    isActive: (editor) => editor.isActive("underline"),
  },
  {
    name: "strike",
    icon: FaStrikethrough,
    command: (editor) => editor.chain().focus().toggleStrike().run(),
    isActive: (editor) => editor.isActive("strike"),
  },
  {
    name: "bulletList",
    icon: FaListUl,
    command: (editor) => editor.chain().focus().toggleBulletList().run(),
    isActive: (editor) => editor.isActive("bulletList"),
  },
  {
    name: "orderedList",
    icon: FaListOl,
    command: (editor) => editor.chain().focus().toggleOrderedList().run(),
    isActive: (editor) => editor.isActive("orderedList"),
  },
  {
    name: "link",
    icon: FaLink,
    command: (editor) => {
      const url = window.prompt("URL");
      if (url) editor.chain().focus().setLink({ href: url }).run();
    },
    isActive: (editor) => editor.isActive("link"),
  },
  {
    name: "image",
    icon: FaImage,
    command: (editor) => {
      const url = window.prompt("Image URL");
      if (url) editor.chain().focus().setImage({ src: url }).run();
    },
  },
  {
    name: "codeBlock",
    icon: FaCode,
    command: (editor) => editor.chain().focus().toggleCodeBlock().run(),
    isActive: (editor) => editor.isActive("codeBlock"),
  },
  {
    name: "undo",
    icon: FaUndo,
    command: (editor) => editor.chain().focus().undo().run(),
  },
  {
    name: "redo",
    icon: FaRedo,
    command: (editor) => editor.chain().focus().redo().run(),
  },
];
