import { AdminJSOptions } from 'adminjs';
import { Router } from "express";
export interface AdminJsWrapperOptions extends AdminJSOptions {
    resources?: string[];
}
export declare const createAdminJs: (options: AdminJsWrapperOptions) => Promise<{
    rootPath: string;
    adminRouter: Router;
}>;
