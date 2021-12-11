import EditorWatchdog from '@ckeditor/ckeditor5-watchdog/src/editorwatchdog';
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import EasyImageUpload from '@ckeditor/ckeditor5-easy-image/src/easyimage';

import RealTimeCollaborativeEditing from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativeediting';

// The following plugin enables real-time collaborative comments.
// You do not need to import it if you do not want to integrate it.
import RealTimeCollaborativeComments from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativecomments';

// The following plugin enables real-time collaborative track changes and is optional.
// You do not need to import it if you do not want to integrate it.
import RealTimeCollaborativeTrackChanges from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativetrackchanges';

// The following plugin enables users presence list and is optional.
// You do not need to import it if you do not want to integrate it.
import PresenceList from '@ckeditor/ckeditor5-real-time-collaboration/src/presencelist';

class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
    Essentials, Paragraph, Bold, Italic, Image, ImageUpload, ImageToolbar, EasyImageUpload,
    // Remove plugins from here if you have not imported them.
    RealTimeCollaborativeEditing, RealTimeCollaborativeComments, RealTimeCollaborativeTrackChanges, PresenceList
];

// Editor configuration.
ClassicEditor.defaultConfig = {
    language: 'en'
};

export default { ClassicEditor, EditorWatchdog };
