export default function info() {
    return { clases :
    [
        {
            "nombre": "ESPAÑOL",
            "seccion": "ES101",
            "creditos":"3",
            "periodo": "1",
            "requisitos": [],
            "estatus":"APR"
        },
        {
            "nombre": "MATEMATICAS",
            "seccion": "MT101",
            "creditos":"4",
            "periodo": "1",
            "requisitos": [],
            "estatus":"APR"
        },
        {
            "nombre": "INTRODUCCIÓN A LAS CIENCIAS DE LA COMPUTACIÓN",
            "seccion": "IF112",
            "creditos":"3",
            "periodo": "1",
            "requisitos": [],
            "estatus":"APR"
        },
        {
            "nombre": "SOCIOLOGÍA",
            "seccion": "SC101",
            "creditos":"3",
            "periodo": "1",
            "requisitos": [],
            "estatus":"APR"
        },
        {
            "nombre": "FILOSOFÍA",
            "seccion": "FI101",
            "creditos":"3",
            "periodo": "1",
            "requisitos": [],
            "estatus":"APR"
        },
        {
            "nombre": "EXPRESIÓN ORAL Y ESCRITA",
            "seccion": "ES201",
            "creditos":"3",
            "periodo": "2",
            "requisitos": ["ESPAÑOL"],
            "estatus":"APR"
        },
        {
            "nombre": "PRE CALCULO",
            "seccion": "MT201",
            "creditos":"4",
            "periodo": "2",
            "requisitos": ["MATEMATICAS"],
            "estatus":"APR"
        },
        {
            "nombre": "FUNDAMENTOS Y LÓGICA DE PROGRAMACIÓN",
            "seccion": "IF200",
            "creditos":"4",
            "periodo": "2",
            "requisitos": ["INTRODUCCIÓN A LAS CIENCIAS DE LA COMPUTACIÓN"],
            "estatus":"APR"
        },
        {
            "nombre": "HISTORIA DE HONDURAS",
            "seccion": "HS201",
            "creditos":"3",
            "periodo": "2",
            "requisitos": [],
            "estatus":"APR"
        },
        {
            "nombre": "EL HOMBRE FRENTE A LA VIDA",
            "seccion": "CR201",
            "creditos":"3",
            "periodo": "2",
            "requisitos": ["FILOSOFÍA"],
            "estatus":"APR"
        },
        {
            "nombre": "ESTADÍSTICA I",
            "seccion": "MT202",
            "creditos":"4",
            "periodo": "3",
            "requisitos": ["MATEMATICAS"],
            "estatus":"APR"
        },
        {
            "nombre": "CALCULO I",
            "seccion": "MT303",
            "creditos":"4",
            "periodo": "3",
            "requisitos": ["PRE CALCULO"],
            "estatus":"APR"
        },
        {
            "nombre": "PROGRAMACIÓN ESTRUCTURADA I",
            "seccion": "IF214",
            "creditos":"3",
            "periodo": "3",
            "requisitos": ["FUNDAMENTOS Y LÓGICA DE PROGRAMACIÓN"],
            "estatus":"APR"
        },
        {
            "nombre": "ESTRUCTURAS DISCRETAS",
            "seccion": "IF213",
            "creditos":"3",
            "periodo": "3",
            "requisitos": ["FUNDAMENTOS Y LÓGICA DE PROGRAMACIÓN"],
            "estatus":"APR"
        },
        {
            "nombre": "MÉTODOS Y TÉCNICAS DE INVESTIGACIÓN",
            "seccion": "AD302",
            "creditos":"3",
            "periodo": "4",
            "requisitos": ["ESTADÍSTICA I"],
            "estatus":"APR"
        },
        {
            "nombre": "CALCULO II",
            "seccion": "MT401",
            "creditos":"4",
            "periodo": "4",
            "requisitos": ["CALCULO I"],
            "estatus":"APR"
        },
        {
            "nombre": "PROGRAMACIÓN ESTRUCTURADA II",
            "seccion": "IF303",
            "creditos":"3",
            "periodo": "4",
            "requisitos": ["PROGRAMACIÓN ESTRUCTURADA I"],
            "estatus":"APR"
        },
        {
            "nombre": "FÍSICA I",
            "seccion": "FS201",
            "creditos":"3",
            "periodo": "4",
            "requisitos": ["MATEMATICAS"],
            "estatus":"APR"
        },
        {
            "nombre": "ADMINISTRACIÓN",
            "seccion": "AD101",
            "creditos":"3",
            "periodo": "4",
            "requisitos": [],
            "estatus":"APR"
        },
        {
            "nombre": "BASES DE DATOS I",
            "seccion": "IF322",
            "creditos":"3",
            "periodo": "5",
            "requisitos": [],
            "estatus":"APR"
        },
        {
            "nombre": "BASES DE DATOS I",
            "seccion": "IF322",
            "creditos":"3",
            "periodo": "5",
            "requisitos": [],
            "estatus":"APR"
        },
        {
            "nombre": "CONTABILIDAD",
            "seccion": "CT201",
            "creditos":"3",
            "periodo": "5",
            "requisitos": [],
            "estatus":"APR"
        },
        {
            "nombre": "PROGRAMACIÓN EN ENTORNOS DE DESARROLLO VISUAL",
            "seccion": "IF325",
            "creditos":"3",
            "periodo": "5",
            "requisitos": ["PROGRAMACIÓN ESTRUCTURADA II"],
            "estatus":"APR"
        },
        {
            "nombre": "PRINCIPIOS DE ELETRÓNICA",
            "seccion": "IF319",
            "creditos":"3",
            "periodo": "5",
            "requisitos": ["FÍSICA I"],
            "estatus":"APR"
        },
        {
            "nombre": "MATEMÁTICAS FINANCIERA",
            "seccion": "MT204",
            "creditos":"3",
            "periodo": "5",
            "requisitos": ["MATEMATICAS"],
            "estatus":"APR"
        },
        {
            "nombre": "BASES DE DATOS II",
            "seccion": "IF327",
            "creditos":"3",
            "periodo": "6",
            "requisitos": ["BASES DE DATOS I"],
            "estatus":"APR"
        },
        {
            "nombre": "ÉTICA PROFESIONAL",
            "seccion": "FI507",
            "creditos":"3",
            "periodo": "6",
            "requisitos": ["EL HOMBRE FRENTE A LA VIDA"],
            "estatus":"APR"
        },
        {
            "nombre": "ANÁLISIS Y DISEÑO DE SISTEMAS",
            "seccion": "IF212",
            "creditos":"3",
            "periodo": "6",
            "requisitos": [],
            "estatus":"APR"
        },
        {
            "nombre": "REDES I",
            "seccion": "IF323",
            "creditos":"4",
            "periodo": "6",
            "requisitos": [],
            "estatus":"APR"
        },
        {
            "nombre": "CIRCUITOS LÓGICOS",
            "seccion": "IF324",
            "creditos":"3",
            "periodo": "6",
            "requisitos": ["PRINCIPIOS DE ELETRÓNICA"],
            "estatus":"APR"
        },
        {
            "nombre": "BASES DE DATOS MULTIDIMENSIONAL",
            "seccion": "IF342",
            "creditos":"3",
            "periodo": "7",
            "requisitos": ["BASES DE DATOS II"],
            "estatus":"APR"
        },
        {
            "nombre": "PROGRAMACIÓN MULTIPLATAFORMA",
            "seccion": "IF340",
            "creditos":"3",
            "periodo": "7",
            "requisitos": [],
            "estatus":"APR"
        },
        {
            "nombre": "DESARROLLO DE SOFTWARE",
            "seccion": "IF314",
            "creditos":"4",
            "periodo": "7",
            "requisitos": ["ANÁLISIS Y DISEÑO DE SISTEMAS"],
            "estatus":"APR"
        },
        {
            "nombre": "REDES II",
            "seccion": "IF328",
            "creditos":"4",
            "periodo": "7",
            "requisitos": ["REDES I"],
            "estatus":"APR"
        },
        {
            "nombre": "SISTEMAS AUTOMATIZADOS",
            "seccion": "IF329",
            "creditos":"3",
            "periodo": "7",
            "requisitos": ["CIRCUITOS LÓGICOS"],
            "estatus":"APR"
        },
        {
            "nombre": "SISTEMAS INTELIGENTES PARA NEGOCIOS",
            "seccion": "IF391",
            "creditos":"3",
            "periodo": "8",
            "requisitos": ["BASES DE DATOS MULTIDIMENSIONAL"],
            "estatus":"APR"
        },
        {
            "nombre": "IMPLEMENTACIÓN DE SISTEMAS DE SOFTWARE ",
            "seccion": "IF346",
            "creditos":"3",
            "periodo": "8",
            "requisitos": ["DESARROLLO DE SOFTWARE"],
            "estatus":"APR"
        },
        {
            "nombre": "SISTEMAS OPERATIVOS I",
            "seccion": "IF345",
            "creditos":"3",
            "periodo": "8",
            "requisitos": [],
            "estatus":"APR"
        },
        {
            "nombre": "MICROCONTROLADORES",
            "seccion": "IF370",
            "creditos":"3",
            "periodo": "8",
            "requisitos": [],
            "estatus":"APR"
        },
        {
            "nombre": "DESARROLLO DE PORTALES WEB I",
            "seccion": "IF353",
            "creditos":"3",
            "periodo": "9",
            "requisitos": ["PROGRAMACIÓN MULTIPLATAFORMA"],
            "estatus":"CUR"
        },
        {
            "nombre": "PROGRAMACIÓN MOVIL I",
            "seccion": "IF351",
            "creditos":"3",
            "periodo": "9",
            "requisitos": [],
            "estatus":"CUR"
        },
        {
            "nombre": "GESTIÓN DE LA CALIDAD TOTAL",
            "seccion": "AD104",
            "creditos":"3",
            "periodo": "9",
            "requisitos": [],
            "estatus":"APR"
        },
        {
            "nombre": "SISTEMAS OPERATIVOS II",
            "seccion": "IF352",
            "creditos":"3",
            "periodo": "9",
            "requisitos": ["SISTEMAS OPERATIVOS I"],
            "estatus":"CUR"
        },
        {
            "nombre": "SEMINARIO DE HARDWARE Y ELECTRICIDAD",
            "seccion": "IF381",
            "creditos":"3",
            "periodo": "9",
            "requisitos": ["MICROCONTROLADORES"],
            "estatus":"CUR"
        },
        {
            "nombre": "DESARROLLO DE PORTALES WEB II",
            "seccion": "IF357",
            "creditos":"3",
            "periodo": "10",
            "requisitos": ["DESARROLLO DE PORTALES WEB I"],
            "estatus":""
        },
        {
            "nombre": "PROGRAMACIÓN MOVIL II",
            "seccion": "IF355",
            "creditos":"3",
            "periodo": "10",
            "requisitos": ["PROGRAMACIÓN MOVIL I"],
            "estatus":""
        },
        {
            "nombre": "CONTROL ESTADÍSTICO DE LA CALIDAD",
            "seccion": "MT304",
            "creditos":"3",
            "periodo": "10",
            "requisitos": ["GESTIÓN DE LA CALIDAD TOTAL"],
            "estatus":""
        },
        {
            "nombre": "GESTIÓN Y ESTANDARES DE TECNOLOGÍA DE INFORMACIÓN",
            "seccion": "IF356",
            "creditos":"3",
            "periodo": "10",
            "requisitos": [],
            "estatus":""
        },
        {
            "nombre": "DOCTRINA SOCIAL DE LA IGLESIA",
            "seccion": "CR501",
            "creditos":"3",
            "periodo": "10",
            "requisitos": ["ÉTICA PROFESIONAL"],
            "estatus":"CUR"
        },
        {
            "nombre": "NEGOCIOS WEB",
            "seccion": "IF362",
            "creditos":"3",
            "periodo": "11",
            "requisitos": ["DESARROLLO DE PORTALES WEB II"],
            "estatus":""
        },
        {
            "nombre": "PROGRAMACIÓN DE NEGOCIOS",
            "seccion": "IF347",
            "creditos":"3",
            "periodo": "11",
            "requisitos": [],
            "estatus":""
        },
        {
            "nombre": "PLANEACIÓN Y DISEÑO DE UN MODELO DE CALIDAD",
            "seccion": "AD402",
            "creditos":"3",
            "periodo": "11",
            "requisitos": ["CONTROL ESTADÍSTICO DE LA CALIDAD"],
            "estatus":""
        },
        {
            "nombre": "SEGURIDAD INFORMÁTICA Y GESTIÓN DE RIESGO",
            "seccion": "IF360",
            "creditos":"3",
            "periodo": "11",
            "requisitos": ["GESTIÓN Y ESTANDARES DE TECNOLOGÍA DE INFORMACIÓN"],
            "estatus":""
        },
        {
            "nombre": "ADMINISTRACIÓN DE CENTROS DE COMPUTO",
            "seccion": "IF358",
            "creditos":"3",
            "periodo": "11",
            "requisitos": ["GESTIÓN Y ESTANDARES DE TECNOLOGÍA DE INFORMACIÓN"],
            "estatus":""
        },
        {
            "nombre": "SEMINARIO-TALLER DE SOFTWARE ",
            "seccion": "IF361",
            "creditos":"3",
            "periodo": "12",
            "requisitos": ["NEGOCIOS WEB"],
            "estatus":""
        },
        {
            "nombre": "GESTIÓN DE PROYECTOS INFORMÁTICOS",
            "seccion": "IF392",
            "creditos":"3",
            "periodo": "12",
            "requisitos": ["PROGRAMACIÓN DE NEGOCIOS"],
            "estatus":""
        },
        {
            "nombre": "BIG DATA",
            "seccion": "IF350",
            "creditos":"3",
            "periodo": "12",
            "requisitos": ["SISTEMAS INTELIGENTES PARA NEGOCIOS"],
            "estatus":""
        },
        {
            "nombre": "AUDITORÍA DE SISTEMAS DE INFORMACIÓN",
            "seccion": "IF380",
            "creditos":"3",
            "periodo": "12",
            "requisitos": ["SEGURIDAD INFORMÁTICA Y GESTIÓN DE RIESGO"],
            "estatus":""
        },
        {
            "nombre": "PRÁCTICA PROFESIONAL SUPERVISADA",
            "seccion": "IF400",
            "creditos":"0",
            "periodo": "13",
            "requisitos": [],
            "estatus":""
        }
    ]
    }  
}