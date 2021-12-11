import React from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './App.css';


function App() {



    return (
    <div className="App">
        <CKEditor
            editor={ ClassicEditor }
            data="<p>Hello from CKEditor 5!</p>"
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
            config={{cloudServices: {
                    // PROVIDE CORRECT VALUES HERE:
                    tokenUrl: 'https://dev-tr.creativesociety.com/api/v1/websocket/token',
                    uploadUrl: 'https://your-organization-id.cke-cs.com/easyimage/upload/',
                    webSocketUrl: 'https://dev-tr.creativesociety.com/api/v1/websocket/token'
                },
                collaboration: {
                    channelId: 'document-id'
                },}}
        />
    </div>
  );
}

export default App;
