declare module 'aurelia-logging-console' {
  import {
    Logger
  } from 'aurelia-logging';
  
  /*
   * An implementation of the Appender interface.
   */
  export class ConsoleAppender {
    
    /**
      * Appends a debug log.
      *
      * @param logger The source logger.
      * @param rest The data to log.
      */
    debug(logger: Logger, ...rest: any[]): void;
    
    /**
      * Appends an info log.
      *
      * @param logger The source logger.
      * @param rest The data to log.
      */
    info(logger: Logger, ...rest: any[]): void;
    
    /**
      * Appends a warning log.
      *
      * @param logger The source logger.
      * @param rest The data to log.
      */
    warn(logger: Logger, ...rest: any[]): void;
    
    /**
      * Appends an error log.
      *
      * @param logger The source logger.
      * @param rest The data to log.
      */
    error(logger: Logger, ...rest: any[]): void;
  }
}