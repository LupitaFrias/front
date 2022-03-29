
export interface Data {

    about: String,
    aboutData1: String,
    aboutData2: String
}

export interface Comentario{
    comentario: String;
   
}
export interface Experience{
   
       
               position: String,
               company: String,
               img: URL,
               mode: String,
               start: Date,
               end: String,
               timeElapsed: Number,
               place: String,
           
   
       
   
    }
    export interface Educacion{ 
       education: 
           {
               school: String,
               title: String,
               img: URL,
               career: String,
               score: Number,
               start: Date,
               end: Date,
           }
          
        }    
       
  
  
export interface  Aptitudes
       {
         name: string,
         progress:Number,
         
       }
      
     
  
 
    export interface Persona 
           {
               fullName: String,
               dateOfBirth: Date,
               aboutMe: String,
               mail: String,
               backImage: URL,
               image: URL,
               position: String,
               ubication:String
           }
       
  
 
      export interface  Achivements
           {
               proyect: String,
               mesInicio: String,
               añoInicio: Date,
               mesFin: String,
               añoFin: Date,
               url: URL,
               descripcion: String
           }
           
    
  
 
      export interface usuario
           {
               usuario:String,
               clave: String,
           }
       
   
