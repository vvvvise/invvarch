import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateProjectInfoArgs } from "./args/AggregateProjectInfoArgs";
import { CreateManyAndReturnProjectInfoArgs } from "./args/CreateManyAndReturnProjectInfoArgs";
import { CreateManyProjectInfoArgs } from "./args/CreateManyProjectInfoArgs";
import { CreateOneProjectInfoArgs } from "./args/CreateOneProjectInfoArgs";
import { DeleteManyProjectInfoArgs } from "./args/DeleteManyProjectInfoArgs";
import { DeleteOneProjectInfoArgs } from "./args/DeleteOneProjectInfoArgs";
import { FindFirstProjectInfoArgs } from "./args/FindFirstProjectInfoArgs";
import { FindFirstProjectInfoOrThrowArgs } from "./args/FindFirstProjectInfoOrThrowArgs";
import { FindManyProjectInfoArgs } from "./args/FindManyProjectInfoArgs";
import { FindUniqueProjectInfoArgs } from "./args/FindUniqueProjectInfoArgs";
import { FindUniqueProjectInfoOrThrowArgs } from "./args/FindUniqueProjectInfoOrThrowArgs";
import { GroupByProjectInfoArgs } from "./args/GroupByProjectInfoArgs";
import { UpdateManyProjectInfoArgs } from "./args/UpdateManyProjectInfoArgs";
import { UpdateOneProjectInfoArgs } from "./args/UpdateOneProjectInfoArgs";
import { UpsertOneProjectInfoArgs } from "./args/UpsertOneProjectInfoArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ProjectInfo } from "../../../models/ProjectInfo";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateProjectInfo } from "../../outputs/AggregateProjectInfo";
import { CreateManyAndReturnProjectInfo } from "../../outputs/CreateManyAndReturnProjectInfo";
import { ProjectInfoGroupBy } from "../../outputs/ProjectInfoGroupBy";

@TypeGraphQL.Resolver(_of => ProjectInfo)
export class ProjectInfoCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateProjectInfo, {
    nullable: false
  })
  async aggregateProjectInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProjectInfoArgs): Promise<AggregateProjectInfo> {
    return getPrismaFromContext(ctx).projectInfo.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyProjectInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyProjectInfoArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectInfo.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnProjectInfo], {
    nullable: false
  })
  async createManyAndReturnProjectInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnProjectInfoArgs): Promise<CreateManyAndReturnProjectInfo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectInfo.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProjectInfo, {
    nullable: false
  })
  async createOneProjectInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneProjectInfoArgs): Promise<ProjectInfo> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectInfo.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyProjectInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyProjectInfoArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectInfo.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProjectInfo, {
    nullable: true
  })
  async deleteOneProjectInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneProjectInfoArgs): Promise<ProjectInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectInfo.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ProjectInfo, {
    nullable: true
  })
  async findFirstProjectInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstProjectInfoArgs): Promise<ProjectInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectInfo.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ProjectInfo, {
    nullable: true
  })
  async findFirstProjectInfoOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstProjectInfoOrThrowArgs): Promise<ProjectInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectInfo.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ProjectInfo], {
    nullable: false
  })
  async projectInfos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyProjectInfoArgs): Promise<ProjectInfo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectInfo.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ProjectInfo, {
    nullable: true
  })
  async projectInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProjectInfoArgs): Promise<ProjectInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectInfo.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ProjectInfo, {
    nullable: true
  })
  async getProjectInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProjectInfoOrThrowArgs): Promise<ProjectInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectInfo.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ProjectInfoGroupBy], {
    nullable: false
  })
  async groupByProjectInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProjectInfoArgs): Promise<ProjectInfoGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectInfo.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyProjectInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyProjectInfoArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectInfo.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProjectInfo, {
    nullable: true
  })
  async updateOneProjectInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneProjectInfoArgs): Promise<ProjectInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectInfo.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProjectInfo, {
    nullable: false
  })
  async upsertOneProjectInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneProjectInfoArgs): Promise<ProjectInfo> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).projectInfo.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
