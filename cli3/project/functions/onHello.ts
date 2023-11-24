// import {WebClient} from "@slack/web-api"
// const token = 'xoxb-5602872930626-6172681323763-rlAjd86DLZne8Ve0Fc39T8XE';
// const web = new WebClient(token);
// export default async function (event) {  
//   console.log('hi i ran')
//   try {
//     const result = await web.chat.postMessage({

//      channel: "#general",
//      text: event.payload

//     });
//     console.log('Message sent:', result.ts);
//   } catch (error) {
//     console.error('Error sending message:', error);
//   }
//   return {
//     reply: [{
//       payload: `Hello from Glee! You said: "${event.payload}".`
//     }]
//   }
// }
import { JavaScriptGenerator,JS_COMMON_PRESET, TypeScriptGenerator, TS_COMMON_PRESET } from "@asyncapi/modelina"


const doc = {
  $id: 'Test',
  type: 'string'
};

const handleGenerate = async () =>{

  const generator = new JavaScriptGenerator({
    presets: [
      {
        preset: JS_COMMON_PRESET,
        options: {
          example: true
        }
      }
    ]
  });
  const models = await generator.generate(doc);
  console.log(models);
}


const handleGeneratets = async () =>{

  const generator = new TypeScriptGenerator({
  });
  const models = await generator.generate(doc);
  console.log(models[0].inputModel.models);
}
handleGeneratets();
// handleGenerate();
export default async function (event :any) {  
  return {
    reply: [{
      payload: `Hello from Glee! You said: "${event.payload}".`
    }]
  }
}

