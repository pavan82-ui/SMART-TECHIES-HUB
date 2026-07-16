import { useState, useMemo, useCallback, memo, type ChangeEvent } from 'react'
import data from './data.json'
import './Home.css'

type Task = {
  id: number
  name: string
}

type Project = {
  id: number
  name: string
  tasks: Task[]
}

type Data = {
  projects: Project[]
}

export default function Home() {
  const [search, setSearch] = useState('')

  const filteredProjects = useMemo(
    () =>
      data.projects.filter((project) =>
        project.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  )
  console.log("Filtered Projects:", filteredProjects);

  const handleSearchChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value)
    },
    [],
  )

  return (
    <div>
      <h2>Project Dashboard</h2>

      <input
        className="project-search"
        type="search"
        placeholder="Search project..."
        value={search}
        onChange={handleSearchChange}
      />

      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

const ProjectCard = memo(function ProjectCard({ project }: { project: Project }) {
  console.log("Rendering Project:", project.name);

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{project.name}</h3>

      {project.tasks.map((task) => (
        <p key={task.id}>{task.name}</p>
      ))}
    </div>
  );
});
