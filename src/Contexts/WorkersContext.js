import React from "react";

const WorkersContext = React.createContext();

export const WorkersProvider = WorkersContext.Provider;
export const WorkersConsumer = WorkersContext.Consumer;

export default WorkersContext;
