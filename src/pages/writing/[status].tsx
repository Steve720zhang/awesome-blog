import React, { SyntheticEvent } from 'react';
import styles from './index.less';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import classNames from 'classnames';
import { doFuncWithThrottle } from '@/utils/timer';

// let throttleTimer: any = null;
let dataCursor: { x: number; x1: number } | null = null;

export default function Page() {
  const [folded, setFolded] = React.useState(false);
  const throttleTimer = React.useRef<number | null>(null);
  const [widthBanlencer, setWidthBanlencer] = React.useState(50);
  const [editorState, setEditorState] = React.useState<EditorState>();

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  React.useEffect(() => {
    if (editorState && editorState.getCurrentContent) {
      // const v1 = convertToRaw(editorState.getCurrentContent())
      // // console.log('editorState:', v1)
      // // console.log(`editorState: ${draftToHtml(v1)}`)
    }
  }, [editorState]);

  React.useEffect(() => {
    setWidthBanlencer((window.innerWidth - 48 - 12) / 2);
  }, []);

  const scaleMouseMove = (e: any) => {
    if (!dataCursor || !dataCursor.x) {
      return;
    }
    dataCursor.x1 = e.clientX;
    const cb = (xData: any) => {
      // console.log('xData:', xData, '--------==',widthBanlencer)
      const newXOffset = xData.x;
      setWidthBanlencer(widthBanlencer + newXOffset);
    };
    doFuncWithThrottle(cb, {
      key: 'scale-writing',
      x: dataCursor.x - dataCursor.x1,
    });
  };

  const removeListener = () => {
    dataCursor = null;
    window.removeEventListener('mousemove', scaleMouseMove);
    window.removeEventListener('mouseup', removeListener);
  };

  const onDrag = (e: any) => {
    // console.log('onDrag:', e);
    // setWidthBanlencer(e.clientX)
    dataCursor = null;
    dataCursor = { x: e.clientX, x1: e.clientX };
    window.addEventListener('mousemove', scaleMouseMove);
    window.addEventListener('mouseup', removeListener);
  };

  const onKeyDownCapture = (e: any) => {
    // console.log('onKeyDownCapture:', e);
    if (e.metaKey && e.key === 's') {
      e.stopPropagation();
      e.preventDefault();
      // do save in db
    }
  };

  let rightScale = widthBanlencer / (window.innerWidth - 48 - 12);
  // console.log('rightScale:', rightScale);
  if (rightScale > 0.8) rightScale = 0.8;
  if (rightScale < 0.2) rightScale = 0.2;
  let leftScale = 1 - rightScale;
  leftScale = leftScale * 100;
  rightScale = rightScale * 100;

  return (
    <div className="w-full-width h-full-height flex flex-col items-stretch overflow-hidden">
      <div className="h-12 mb-6 flex-shrink-0">
        <div className="fixed h-12 w-full border-b border-solid border-gray-gray3 shadow-md bg-white px-6 flex flex-row items-center">
          <div className="">写字</div>
        </div>
      </div>
      <div
        className="w-full px-6 mb-4 flex-shrink-0"
        onClick={() => setFolded(!folded)}
      >
        <div
          className={classNames(
            'bg-white py-4 shadow-md w-full rounded-1 transition-all ease-linear transition-delay-300 cursor-pointer',
            {
              'h-12': folded,
              'h-18': !folded,
            },
          )}
        ></div>
      </div>
      <div
        onKeyDownCapture={onKeyDownCapture}
        className="w-full px-6 flex flex-row items-stretch flex-1 pb-6 flex-shrink-0 flex-grow-1 overflow-hidden"
      >
        <div
          className="w-auto bg-white shadow-md flex-1 rounded-1 hidden md:flex"
          style={{ maxWidth: `${leftScale}%` }}
        ></div>
        <div
          onMouseDown={onDrag}
          id="cursor-of-id"
          className="px-px mx-1 w-px border-l border-r border-solid border-gray-gray4 hover:border-gray-gray5 self-stretch hidden md:flex my-4"
          style={{ cursor: 'col-resize' }}
        ></div>
        <div
          className="w-auto bg-white shadow-md flex-1 rounded-1 overflow-hidden"
          style={{ maxWidth: `${rightScale}%` }}
        >
          <div className="border border-solid border-gray-gray1 p-2 bg-white m-1 rounded-1 h-full overflow-hidden">
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="flex flex-col items-stretch h-full"
              onEditorStateChange={onEditorStateChange}
              editorClassName="flex-1 overflow-scroll"
              localization={{
                locale: 'zh',
              }}
            />
          </div>
        </div>
      </div>
      <footer className="h-10 bg-white flex flex-row px-6 items-center flex-shrink-0">
        <div className="flex-1" />
        <a
          className="text-dark-4 select-none"
          href="https://beian.miit.gov.cn"
          target="_blank"
        >
          {'豫ICP备20011799号-1'}
        </a>
        <div className="flex-1" />
      </footer>
    </div>
  );
}
