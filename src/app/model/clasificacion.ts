import { Equipo } from "./equipo";

export interface Estadisticas {
    localPartidosJugados: number;
    localPartidosGanados: number;
    localPartidosEmpatados: number;
    localPartidosPerdidos: number;
    localGolesFavor: number;
    localGolesContra: number;
    visitantePartidosJugados: number;
    visitantePartidosGanados: number;
    visitantePartidosEmpatados: number;
    visitantePartidosPerdidos: number;
    visitanteGolesFavor: number;
    visitanteGolesContra: number;
    totalPartidosGanados: number;
    totalPartidosEmpatados: number;
    totalPartidosJugados: number;
    totalPartidosPerdidos: number;
    totalGolesContra: number;
    localPuntos: number;
    visitantePuntos: number;
    totalPuntos: number;
    totalGolesFavor: number;
}
  
export interface EstadisticasEquipo {
    clasificacion: number;
    equipo: Equipo;
    estadisticas: Estadisticas;
}
  
// Definimos el tipo que contiene todos los equipos, usando un índice numérico.
export type Clasificacion = Record<number, EstadisticasEquipo>;