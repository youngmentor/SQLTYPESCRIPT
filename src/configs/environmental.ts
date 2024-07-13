import dotenv from "dotenv";
dotenv.config();

const envVariables = {
    databasePort: parseInt(process.env.PORT as string) 
};

export default envVariables;
