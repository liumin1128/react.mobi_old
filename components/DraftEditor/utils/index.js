import { AtomicBlockUtils, EditorState, convertToRaw } from 'draft-js';

export function insertAtomicBlock(editorState, type, ima, data) {
  const contentState = editorState.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity(type, ima, data);
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });

  return AtomicBlockUtils.insertAtomicBlock(
    newEditorState,
    entityKey,
    ' ',
  );
}

export function getJSON(editorState) {
  return convertToRaw(editorState.getCurrentContent());
}

// import { stateToHTML } from 'draft-js-export-html';

// export function getHTML(editorState) {
//   const { editorState } = this.state;
//   return stateToHTML(editorState.getCurrentContent(), {
//       blockRenderers: {
//         atomic: (block) => {
//           const entity = editorState.getCurrentContent().getEntity(block.getEntityAt(0))
//           const type = entity.getType()
//           const data = entity.getData()
//           switch (type) {
//             case 'image': return `<img src="${data.src}" alt=""/>`;
//             case 'agent': return `
//               <div data-id="${data.id}" data-_id="${data._id}" class="agent-card">
//                 <img class="agent-card-avatar" src=${data.avatar} alt=""/>
//                   <h3>${data.nickname}</h3>
//                 <p>${data.desc}</p>
//               </div>
//             `;
//                 // data-setup="{}"
//             case 'videoQiniu': return `
//               <video
//                 class="video-js"
//                 id="${data.src}"
//                 poster="${data.poster}"
//                 src="${data.src}"
//                 controls
//                 preload="auto"
//               ></video>
//             `;
//             default: break
//           }
//         },
//         // unstyled: (block) => {
//         //   const key = block.getEntityAt(0)
//         //   if(!key) return;
//         //   const entity = editorState.getCurrentContent().getEntity(block.getEntityAt(0))
//         //   const type = entity.getType()
//         //   const data = entity.getData()
//         //   switch (type) {
//         //     case 'IMAGE': return `<img class="image" src="${data.src}" alt=""/>`;
//         //     default: break
//         //   }
//         // },
//       },
//     });
// }
