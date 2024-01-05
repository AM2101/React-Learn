import conf from "../conf/conf";
import {Client, ID, Databases, Storage, Query} from 'appwrite';

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setEndpoint(conf.appwriteProjectId)
        this.databases = new Databases(this.client);;
        this.bucket = new Storage(this.client);  
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            await this.databases.get(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
            
        } catch (error) {
            console.log("Appwrite service :: createpost :: error ", error);
        }
    }

    async updatePost ( slug, {title, content, featuredImage, status}) {
        try {
            await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: update Post :: error ", error);   
        }
        
    }

    async deletePost (slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: delete post :: error ", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("appwrite service :: getpost :: error ",error);
        }
    }

    async getPosts(querier = [Query.equal('status', 'active')]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                querier,
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error ", error);
            return false
        }
    }

    //file upload service

    async uploadFile (file){
        try {
            return await this.bucket.createFile(
                conf.appwriteDatabaseId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("appwrite service :: uploadfile :: error ", error);
            return false;
        }

    }

    async deleteFile (fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteDatabaseId,
                fileId
            )
            return true
        } catch (error) {
            console.log("appwrite service :: deleteFile :: error ", error);
            return false;
        }
    }
    
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteDatabaseId,
            fileId
        )
    }
}

const service = new Service()

export default service