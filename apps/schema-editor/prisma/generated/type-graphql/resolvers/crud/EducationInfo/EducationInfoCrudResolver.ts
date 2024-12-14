import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEducationInfoArgs } from "./args/AggregateEducationInfoArgs";
import { CreateManyAndReturnEducationInfoArgs } from "./args/CreateManyAndReturnEducationInfoArgs";
import { CreateManyEducationInfoArgs } from "./args/CreateManyEducationInfoArgs";
import { CreateOneEducationInfoArgs } from "./args/CreateOneEducationInfoArgs";
import { DeleteManyEducationInfoArgs } from "./args/DeleteManyEducationInfoArgs";
import { DeleteOneEducationInfoArgs } from "./args/DeleteOneEducationInfoArgs";
import { FindFirstEducationInfoArgs } from "./args/FindFirstEducationInfoArgs";
import { FindFirstEducationInfoOrThrowArgs } from "./args/FindFirstEducationInfoOrThrowArgs";
import { FindManyEducationInfoArgs } from "./args/FindManyEducationInfoArgs";
import { FindUniqueEducationInfoArgs } from "./args/FindUniqueEducationInfoArgs";
import { FindUniqueEducationInfoOrThrowArgs } from "./args/FindUniqueEducationInfoOrThrowArgs";
import { GroupByEducationInfoArgs } from "./args/GroupByEducationInfoArgs";
import { UpdateManyEducationInfoArgs } from "./args/UpdateManyEducationInfoArgs";
import { UpdateOneEducationInfoArgs } from "./args/UpdateOneEducationInfoArgs";
import { UpsertOneEducationInfoArgs } from "./args/UpsertOneEducationInfoArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { EducationInfo } from "../../../models/EducationInfo";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateEducationInfo } from "../../outputs/AggregateEducationInfo";
import { CreateManyAndReturnEducationInfo } from "../../outputs/CreateManyAndReturnEducationInfo";
import { EducationInfoGroupBy } from "../../outputs/EducationInfoGroupBy";

@TypeGraphQL.Resolver(_of => EducationInfo)
export class EducationInfoCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateEducationInfo, {
    nullable: false
  })
  async aggregateEducationInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEducationInfoArgs): Promise<AggregateEducationInfo> {
    return getPrismaFromContext(ctx).educationInfo.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyEducationInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyEducationInfoArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).educationInfo.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEducationInfo], {
    nullable: false
  })
  async createManyAndReturnEducationInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEducationInfoArgs): Promise<CreateManyAndReturnEducationInfo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).educationInfo.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EducationInfo, {
    nullable: false
  })
  async createOneEducationInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEducationInfoArgs): Promise<EducationInfo> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).educationInfo.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyEducationInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyEducationInfoArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).educationInfo.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EducationInfo, {
    nullable: true
  })
  async deleteOneEducationInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneEducationInfoArgs): Promise<EducationInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).educationInfo.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EducationInfo, {
    nullable: true
  })
  async findFirstEducationInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEducationInfoArgs): Promise<EducationInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).educationInfo.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EducationInfo, {
    nullable: true
  })
  async findFirstEducationInfoOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEducationInfoOrThrowArgs): Promise<EducationInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).educationInfo.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EducationInfo], {
    nullable: false
  })
  async educationInfos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEducationInfoArgs): Promise<EducationInfo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).educationInfo.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EducationInfo, {
    nullable: true
  })
  async educationInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEducationInfoArgs): Promise<EducationInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).educationInfo.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EducationInfo, {
    nullable: true
  })
  async getEducationInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEducationInfoOrThrowArgs): Promise<EducationInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).educationInfo.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EducationInfoGroupBy], {
    nullable: false
  })
  async groupByEducationInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEducationInfoArgs): Promise<EducationInfoGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).educationInfo.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyEducationInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyEducationInfoArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).educationInfo.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EducationInfo, {
    nullable: true
  })
  async updateOneEducationInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneEducationInfoArgs): Promise<EducationInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).educationInfo.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EducationInfo, {
    nullable: false
  })
  async upsertOneEducationInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEducationInfoArgs): Promise<EducationInfo> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).educationInfo.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
