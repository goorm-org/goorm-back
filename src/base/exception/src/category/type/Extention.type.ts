export type Extension = {
  extensions: {
    code: string;
    extension: {
      code: string;
      stack: any;
    };
    statusCode: number;
    response: {
      statusCode: number;
      message: any;
    };
  };
};
