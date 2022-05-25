import { Injectable } from '@angular/core';


// ****************************************************
// Log Level Enumeration
// ****************************************************
export enum LogLevel {
    All = 0,
    Debug = 1,
    Info = 2,
    Warn = 3,
    Error = 4,
    Fatal = 5,
    Off = 6
}

// ****************************************************
// Log Entry Class
// ****************************************************
export class LogEntry {
    // Public Properties
    entryDate: Date = new Date();
    message: string = "";
    level: LogLevel = LogLevel.Debug;
    extraInfo: any[] = [];
    logWithDate: boolean = true;
  
    // **************
    // Public Methods - Log Entry
    // **************
    buildLogString(): string {
      let value: string = "";
  
      if (this.logWithDate) {
        value = new Date() + " - ";
      }
      value += "Type: " + LogLevel[this.level];
      value += " - Message: " + this.message;
      if (this.extraInfo.length) {
        value += " - Extra Info: "
          + this.formatParams(this.extraInfo);
      }
  
      return value;
    }
  
    // ***************
    // Private Methods - Log Entry
    // ***************
    private formatParams(params: any[]): string {
      let ret: string = params.join(",");
  
      // Is there at least one object in the array?
      if (params.some(p => typeof p == "object")) {
        ret = "";
        // Build comma-delimited string
        for (let item of params) {
          ret += JSON.stringify(item) + ",";
        }
      }
  
      return ret;
    }
  }

// ****************************************************
// Log Service Class
// ****************************************************
@Injectable()
export class LogService {
    // Public Properties
    level: LogLevel = LogLevel.All;
    logWithDate: boolean = true;

    // *************************
    // Public methods - Log Service
    //  - optionally log any paramaters
    // *************************
    debug(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Debug, optionalParams);
    }
    
    info(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Info, optionalParams);
    }
    
    warn(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Warn, optionalParams);
    }
    
    error(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Error, optionalParams);
    }
    
    fatal(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Fatal, optionalParams);
    }
    
    log(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.All, optionalParams);
    }

    // *************************
    // Private methods - Log Service
    // *************************
    private shouldLog(level: LogLevel): boolean {
        let ret = false;

        if ((level >= this.level &&
        level !== LogLevel.Off) ||
        this.level === LogLevel.All) {
        ret = true;
        }

        return ret;
    }

    private writeToLog(msg: string, level: LogLevel, params: any[]) {
        if (this.shouldLog(level)) {
            if (this.shouldLog(level)) {
                let entry: LogEntry = new LogEntry();
                entry.message = msg;
                entry.level = level;
                entry.extraInfo = params;
                entry.logWithDate = this.logWithDate;
                console.log(entry.buildLogString());
            }
        }
  }

}


