
export interface Estadisticas {
    idEquipo:number;
    nombreEquipo: string;
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
    equipo: string;
    estadisticas: Estadisticas;
}
  
// Definimos el tipo que contiene todos los equipos, usando un índice numérico.
export type Clasificacion = Record<string, EstadisticasEquipo>;