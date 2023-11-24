// import {WebClient} from "@slack/web-api"
// const token = 'xoxb-5602872930626-6172681323763-rlAjd86DLZne8Ve0Fc39T8XE';
// const web = new WebClient(token);
// export default async function (event) {  
//   console.log('hi i ran')
//   try {
//     const result = await web.chat.postMessage({
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
import { JavaScriptGenerator, JS_COMMON_PRESET, TypeScriptGenerator } from "@asyncapi/modelina";
const doc = {
    $id: 'Test',
    type: 'string'
};
const handleGenerate = () => __awaiter(void 0, void 0, void 0, function* () {
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
    const models = yield generator.generate(doc);
    console.log(models);
});
const handleGeneratets = () => __awaiter(void 0, void 0, void 0, function* () {
    const generator = new TypeScriptGenerator({});
    const models = yield generator.generate(doc);
    console.log(models[0].inputModel.models);
});
handleGeneratets();
// handleGenerate();
export default function (event) {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            reply: [{
                    payload: `Hello from Glee! You said: "${event.payload}".`
                }]
        };
    });
}
