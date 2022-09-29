import Joi from "joi";

import { TaskRules } from "rules";
import { TaskTypes } from "types";

namespace TaskSchema {
  export namespace Create {
    export const Form = Joi.object<TaskTypes.Create.Form>({
      content: TaskRules.Create.Content,
      description: TaskRules.Create.Description,
      project: TaskRules.Create.Project,
      // projectId: TaskRules.Create.ProjectId,
    });
  }

  export namespace Update {
    export const Form = Joi.object<TaskTypes.Update.Form>({
      content: TaskRules.Update.Content,
      description: TaskRules.Update.Description,
    });
  }
}

export default TaskSchema;
