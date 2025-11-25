import { View, Text } from "react-native"
import { useEffect, useState } from "react"

export default function Usuarios() {
    const [usuarios, setUsuarios] = useState([])
    async function fetchUsers() {
        try {
            const response = await fetch("./usuariosCadastrados");
            const data = await response.json();
            console.log(data);
            setUsuarios(data);
        } catch (error) {
            console.error("Erro ao buscar usuarios:", error);
        }
    }
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <View>
            <Text>Usuarios</Text>
            {
                usuarios.map((u) => {
                    return (
                        <>
                            <View style={{borderWidth:1,borderColor:'black', width:'100%'}}></View>
                            <Text>{u.name}</Text>
                            <Text>{u.username}</Text>
                        </>
                    )
                })
            }
        </View>
    )
}