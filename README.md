# Llama Logger
Llama is aspiring to be a dynamic logger that will be suitable for most javascript and typescript developers.


## Features
* Custom log messages - Log messages are user defined so each message can contain whatever properties the user chooses
* Outputs - Each logger can have several diffrent outputs, where output is the destination of the log message (Console, File, RabbitMQ etc.)
* Formats - Diffrent formats can be assgined to each output. A format is the structure of the message (csv, json, etc.)
* Severity Levels - Each logger instance can have different severity levels, and each output can accept different severity levels as well. Severity levels are the "importance classifier" of each message (Info, alert, fatal, warning, etc.). Every message has to have a severity level.
* Custome Severity levels - Users can define their own severity levels and assgin them to the wanted logger.
