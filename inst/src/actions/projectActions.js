export const UPLOAD_PROJECT = 'UPLOAD_PROJECT';

export const uploadProject = project => {
  return ( { type: UPLOAD_PROJECT, project } );
};
