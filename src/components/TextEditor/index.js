import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const config = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "|",
    "numberedList",
    "bulletedList",
  ],
};

function TextEditor({ text, onChangeText }) {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={config}
      data={text}
      onChange={(event, editor) => {
        onChangeText(editor.getData());
      }}
    />
  );
}

export default TextEditor;
