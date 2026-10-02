import { useState } from "react"

export default function ConstApi() {

  const [form, setForm] = useState({
    name: '',
    city: '',
    location: '',
    Month: '',
  })
  const handleChange = (e) => {
    setForm({
      ...form,
      name: e.target.value,
    }

    )
  }
  return (
    <div>
      <form>
        <input type="text"
          onChange={handleChange}
          name="name"
          placeholder="Ente name"

        />
      </form>
    </div>
  )
}
