Script
{
Id,
Name,
Description,
Code,
IsDeleted
}

Form
{
Id,
Name,
Description,
IsDeleted
}

FormField
{
Id,
FormId,
Label,
Type,
Description
}

Task
{
Id,
Name,
Description,
ScriptId,
FormId,
IsDeleted
}

TaskExecution
{
Id,
TaskId,
ExecuteTime,
Cron,
Status
}

TaskExecutionInput
{
Id,
ExecutionId,
FieldId,
Value
}

TaskExecutionOutput
{
Id,
ExecutionId,
Output,
CreateTime
}

TaskExecutionLog
{
Id,
ExecutionId,
LogLevel,
LogContent,
LogTime
}
