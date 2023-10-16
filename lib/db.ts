
/*
Ensures a single Prisma client instance globally in your application, which can help
 prevent resource and memory issues that might lead to errors or 
 performance problems if you were to create multiple client instances 
 in various parts of your code. 


*/

import { PrismaClient } from '@prisma/client'


declare global{
    var prisma: PrismaClient | undefined; 
};

/*
This line declares a global variable prisma of 
type PrismaClient | undefined to be used globally
*/

export const db = globalThis.prisma || new PrismaClient(); 

/*
 exports a constant db that is initialized with the global prisma if it exists or creates
  a new PrismaClient instance if prisma is not defined. This prevents the creation 
  of multiple Prisma clients  in your application, ensuring that you use 
  a single instance throughout.
*/ 

if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = db; 
}
 
/*
GlobalThis is no effected by hot reload 
This conditional statement sets the global prisma variable to the db instance 
in non-production environments.This means that in a development environment,
 prisma will refer to the same instance as db

*/

