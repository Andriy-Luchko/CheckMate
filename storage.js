import DocumentPicker from "react-native-document/picker";
import { uploadData } from 'aws-amplify/storage';

async function docPicker() {
    // Pick a single file
    try {
      const [result] = await pickSingle({
       //by using allFiles type, you will able to pick any type of media from user device, 
    //There can me more options as well
    //DocumentPicker.types.images: All image types
    //DocumentPicker.types.plainText: Plain text files
    //DocumentPicker.types.audio: All audio types
   //DocumentPicker.types.pdf: PDF documents
   //DocumentPicker.types.zip: Zip files
   //DocumentPicker.types.csv: Csv files
   //DocumentPicker.types.doc: doc files
   //DocumentPicker.types.docx: docx files
  //DocumentPicker.types.ppt: ppt files
  //DocumentPicker.types.pptx: pptx files
  //DocumentPicker.types.xls: xls files
  //DocumentPicker.types.xlsx: xlsx files
  //For selecting more more than one options use the 
 //type: [DocumentPicker.types.csv,DocumentPicker.types.xls]
         type: [DocumentPicker.types.images],
         
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size
      );
      this.uploadData(res);//here you can call your API and send the data to that API
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("error -----", err);
      } else {
        throw err;
      }
    }

  
  }

  async function uploadData(img){
    try {
      const result = await uploadData({
        key: img.name,
        data: img.uri,
        options: {
          accessLevel: 'guest', // defaults to `guest` but can be 'private' | 'protected' | 'guest'
          onProgress // Optional progress callback.
        }
      }).result;
      console.log('Succeeded: ', result);
    } catch (error) {
      console.log('Error : ', error);
    }
  }
