use project::Project;

pub trait Command {
    fn forward(&self, project: &mut Project);
    fn backward(&self, project: &mut Project);
}
